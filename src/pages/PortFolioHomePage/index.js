import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button, IconButton, } from "@mui/material";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Add, Edit, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import createUpdateRecord from "../../modules/CreateUpdateRecord";
import { useStore } from "../../zustand"

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            sx={{ padding: '20px' }}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

const PAGE_SIZE = 10;


const PortFolioHomePage = () => {
    const { tableData, setTableData, setAllData, allData } = useStore();
    const [totalRecords, setTotalRecords] = useState();
    const columns = [
        { field: 'month_year', headerName: 'Date', width: 200, editable: false, },
        { field: 'delivery_director', headerName: 'Delivery Director', width: 210, editable: false, },
        // { field: 'delivery_manager', headerName: 'Delivery Manager', width: 180, editable: false },
        {
            field: 'portfolio_status', editable: false, headerName: 'Portfolio Status', width: 210, renderCell: (params) => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',

                }}>
                    <Box
                        sx={{
                            backgroundColor: params.value === 'Green' ? '#55BE97' : '#FF4D4F',
                            height: '10px',
                            width: '10px',
                            borderRadius: '50%',
                            color: '#fff',
                            fontWeight: 600,
                            display: 'flex',
                            marginRight: '10px'
                        }}
                    ></Box>{params.value}
                </Box>
            )
        },
        {
            field: 'projects_on_track', editable: false, headerName: 'Projects On Track', type: 'number', width: 160, align: "center", headerAlign: 'center',
            // valueFormatter: (params) => (params.value !== null || params.value !== undefined) ? params.value : '-',
        },
        {
            field: 'gm_percentage', editable: false, headerName: 'GM % (RAG)', type: 'number', width: 160, align: "center", headerAlign: 'center',
            // valueFormatter: (params) =>
            //     (params?.value !== null || params?.value !== undefined || params?.value !== '') ? params.value : '-',
        },
        {
            field: 'escalations', editable: false, headerName: 'No of Escalations', type: 'number', width: 160, align: "center", headerAlign: 'center',
            // valueFormatter: (params) =>
            //     (params?.value !== null || params?.value !== undefined) ? params.value : '-'
        },
        {
            field: 'projects_at_high_risk', editable: false, headerName: 'Projects at High Risk', align: "center", headerAlign: 'center',
            width: 210,
            renderCell: (params) => (
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: params.value === 0 ? '#55BE97' : '#FF4D4F',
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            color: '#fff',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {params.value}
                    </Box>
                </Box>),
        },
        {
            field: 'View', editable: false, headerName: '', width: 210, renderCell: (i) => {
                return (
                    <>
                        <IconButton
                            sx={{ padding: 0, color: '#5A6FB5' }}
                            aria-label="edit"
                            onClick={() => {
                                navigate("/portfolioStatusView", {
                                    state: { row: i.row, onClick: true, viewProject: true },
                                });
                            }}
                        >
                            <Visibility />
                        </IconButton>
                        {/* <IconButton
                            sx={{ padding: 0, marginLeft: '30px', color: '#5A6FB5' }}
                            aria-label="edit"
                            onClick={() => {
                                navigate(`/portfolio-status/edit/${i.row.portfolio_id}`, {
                                    state: { row: i.row, onClick: true, editProject: true },
                                });
                            }}
                        >
                            <Edit />
                        </IconButton> */}
                    </>
                );
            },
        },
    ];


    const [paginationModel, setPaginationModel] = React.useState({
        pageSize: PAGE_SIZE,
        page: 0,
    });

    function QuickSearchToolbar() {
        // const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];
        return (
            <Box sx={{ marginBottom: '30px' }}>
                <Box sx={{ display: 'flex', padding: '30px', justifyContent: "space-between", paddingBottom: 0 }}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: 500, fontSize: '20px', textAlign: "left", }}>Past Portfolio Details</Typography>
                    <Box>
                        <Box
                            sx={{
                                p: 0.5,
                                pb: 0,
                                display: 'inline-block',
                                textAlign: 'right',
                                marginRight: '30px'
                            }}
                        >
                            <GridToolbarQuickFilter />
                        </Box>
                        <Button startIcon={<Add />} onClick={addPortfolio} sx={{ width: '220px', background: '#5A6FB5', color: 'white', fontSize: '14px', textTransform: 'none' }}>Add Portfolio Details</Button>
                    </Box>
                </Box>
            </Box>
        );
    }

    const navigate = useNavigate();
    const addPortfolio = () => {
        navigate('/portfolio-status')
    }

    useEffect(() => {
        async function fetchTableData() {
            try {
                const response = await createUpdateRecord(
                    null,
                    // `fetch_merged_records/?page=${paginationModel.page + 1}&page_size=${paginationModel.pageSize}`,
                    `list_of_records_groupby_deliverydirector_and_monthyear/?page=${paginationModel.page + 1}&page_size=${10}`,
                    null,
                    "GET"
                );

                // console.log(response.data, 'response')

                const portfolio_status_result = response.data.map(el => { return el.portfolio_status.includes("Green") ? "Green" : "Red" })
                // console.log(portfolio_status_result); // Output: Green

                const porject_on_track_result = response.data.map(el => { return el.projects_on_track.reduce((a, b) => a + b, 0) })
                // console.log(porject_on_track_result, 'porject_on_track_result')

                const gm_result = response.data.map(el => { return el.gm_percentage.reduce((a, b) => a + b / el.gm_percentage.length, 0) })
                // console.log(gm_result, 'gm_result')

                const escalations_result = response.data.map(el => { return el.escalations.reduce((a, b) => a + b, 0) })
                // console.log(escalations_result, 'escalations_result')

                const projects_at_high_risk_result = response.data.map(el => { return el.projects_at_high_risk.reduce((a, b) => a + b, 0) })
                // console.log(projects_at_high_risk_result, 'projects_at_high_risk_result')


                const final_result = {
                    portfolio_status_result,
                    porject_on_track_result,
                    gm_result,
                    escalations_result,
                    projects_at_high_risk_result,
                    month_year: response.data.map(el => el.month_year),
                    delivery_director: response.data.map(el => el.delivery_director)
                }


                // Transform data into rows
                const tableData = final_result.portfolio_status_result.map((_, index) => ({
                    id: index + 1, // Unique ID for DataGrid
                    portfolio_status: final_result.portfolio_status_result[index],
                    projects_on_track: final_result.porject_on_track_result[index],
                    gm_percentage: final_result.gm_result[index],
                    escalations: final_result.escalations_result[index],
                    projects_at_high_risk: final_result.projects_at_high_risk_result[index],
                    month_year: final_result.month_year[index][0], // Extract first element from array
                    delivery_director: final_result.delivery_director[index][0] // Extract first element from array
                }));

                // console.log(final_result, 'final_result');
                // console.log(tableData, 'tableData');
                // console.log(response.total_records, 'totalRecords');

                setTotalRecords(response.total_records);
                setTableData(tableData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchTableData();
    }, [paginationModel]);

    const fetchAllTableData = useCallback(async () => {
        try {
            const response = await createUpdateRecord(
                null,
                `list_of_records_groupby_deliverydirector_and_monthyear/?page=${1}&page_size=${response.total_records}`,
                null,
                "GET"
            );

            const rowsWithId = response.data.map((row, index) => ({
                id: index,
                ...row
            }));

            setAllData(rowsWithId);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [totalRecords]);

    useEffect(() => {
        fetchAllTableData();
    }, [fetchAllTableData]);

    return (
        <Box sx={{ background: "#F8F6FD", padding: '40px', margin: '30px', borderRadius: '20px' }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: 6, textAlign: "left" }}
            >
                Portfolio
            </Typography>
            <Paper>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    isCellEditable={false}
                    paginationModel={paginationModel}
                    rowCount={totalRecords}
                    paginationMode="server"
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[PAGE_SIZE]}
                    slots={{
                        pagination: CustomPagination,
                        toolbar: QuickSearchToolbar
                    }}
                    initialState={{
                        pagination: { paginationModel },
                        filter: {
                            filterModel: {
                                items: [],
                                quickFilterValues: [],
                            }
                        }
                    }}
                    checkboxSelection
                    filterMode="client"
                    sx={{ border: 0, borderRadius: '20px' }}
                />
            </Paper>
        </Box>
    );
};

export default PortFolioHomePage;
