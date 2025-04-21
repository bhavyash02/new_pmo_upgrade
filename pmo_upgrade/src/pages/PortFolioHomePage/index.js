import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, } from "@mui/material";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbarQuickFilter
} from '@mui/x-data-grid';
import clsx from 'clsx';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Add, Edit, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import createUpdateRecord from "../../modules/CreateUpdateRecord";

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
    const [tableData, setTableData] = useState({});
    const columns = [
        { field: 'month_year', headerName: 'Date', width: 200, editable: false, },
        { field: 'delivery_director', headerName: 'Delivery Director', width: 180, editable: false, },
        { field: 'delivery_manager', headerName: 'Delivery Manager', width: 180, editable: false },
        { field: 'portfolio_status', editable: false, headerName: 'Portfolio Status', width: 180 },
        { field: 'projects_on_track', editable: false, headerName: 'Projects On Track', type: 'number', width: 140, align: "center", headerAlign: 'center', },
        { field: 'GM', editable: false, headerName: 'GM % (RAG)', type: 'number', width: 140, align: "center", headerAlign: 'center', },
        { field: 'escalations', editable: false, headerName: 'No of Escalations', type: 'number', width: 140, align: "center", headerAlign: 'center' },
        {
            field: 'projects_at_high_risk', editable: false, headerName: 'Projects at High Risk', align: "center", width: 180, headerAlign: 'center',
            cellClassName: (params) => {
                if (params.value == null) {
                    return '';
                }

                return clsx('super-app', {
                    negative: params.value > 0,
                    positive: params.value <= 0,
                });
            } //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'title', editable: false, headerName: '', width: 180, renderCell: (i) => {
                return (
                    <>
                        <IconButton
                            sx={{ padding: 0, color: '#5A6FB5' }}
                            aria-label="edit"
                            onClick={() => {
                                navigate("/portfolioStatusView", {
                                    state: { row: i.row, onClick: true },
                                });
                            }}
                        >
                            <Visibility />
                        </IconButton>
                        <IconButton
                            sx={{ padding: 0, marginLeft: '30px', color: '#5A6FB5' }}
                            aria-label="edit"
                            onClick={() => {
                                navigate("/portfolioStatusEdit", {
                                    state: { row: i.row, onClick: true },
                                });
                            }}
                        >
                            <Edit />
                        </IconButton>
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
                    'fetch_merged_records/?page=1&page_size=10',
                    null,
                    "GET"
                );

                const rowsWithId = response.data.map((row, index) => ({
                    id: index,
                    ...row
                  }));
                setTableData(rowsWithId);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchTableData();
    }, []);


    console.log(tableData, 'tableData')
    return (
        <Box sx={{ background: "#F8F6FD", padding: '40px', margin: '30px', borderRadius: '20px' }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: 6, textAlign: "left" }}
            >
                Portfolio
            </Typography>
            <Paper sx={{
                width: '100%', borderRadius: '20px',
                '& .super-app.negative': {
                    // backgroundColor: 'red',
                    // height: '35px',
                    // width: '35px',
                    // borderRadius: '50%',
                    // color: '#1a3e72',
                    // fontWeight: '600',
                },
                '& .super-app.positive': {
                    // backgroundColor: 'green',
                    // height: '35px',
                    // width: '35px',
                    // borderRadius: '50%',
                    // color: '#1a3e72',
                    // fontWeight: '600',
                },
            }}>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    isCellEditable={false}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[PAGE_SIZE]}
                    slots={{
                        pagination: CustomPagination,
                        toolbar: QuickSearchToolbar
                    }}
                    initialState={{ pagination: { paginationModel } }}
                    checkboxSelection
                    sx={{ border: 0, borderRadius: '20px' }}
                />
            </Paper>
        </Box>
    );
};

export default PortFolioHomePage;
