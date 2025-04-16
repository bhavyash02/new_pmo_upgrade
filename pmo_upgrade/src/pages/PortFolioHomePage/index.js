import * as React from 'react';
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

const PAGE_SIZE = 5;



const PortFolioHomePage = () => {
    const columns = [
        { field: 'date', headerName: 'Date', width: 200, editable: false, },
        { field: 'deliveryDirector', headerName: 'Delivery Director', width: 180, editable: false, },
        { field: 'deliveryManager', headerName: 'Delivery Manager', width: 180, editable: false },
        { field: 'portfolioStatus', editable: false, headerName: 'Portfolio Status', width: 180 },
        { field: 'projectsOnTrack', editable: false, headerName: 'Projects On Track', type: 'number', width: 140, align: "center", headerAlign: 'center', },
        { field: 'GM', editable: false, headerName: 'GM % (RAG)', type: 'number', width: 140, align: "center", headerAlign: 'center', },
        { field: 'escalations', editable: false, headerName: 'No of Escalations', type: 'number', width: 140, align: "center", headerAlign: 'center' },
        {
            field: 'highRisk', editable: false, headerName: 'Projects at High Risk', align: "center", width: 180, headerAlign: 'center',
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

    const rows = [
        { id: 1, date: '2025 December', deliveryDirector: 'Snow', deliveryManager: 'Jon', portfolioStatus: 'Green', projectsOnTrack: 6, GM: 6, escalations: 35, highRisk: 1 },
        { id: 2, date: 2, deliveryDirector: 'Targaryen', deliveryManager: 'Arya', portfolioStatus: 'Amber', projectsOnTrack: 4, GM: 5, escalations: 20, highRisk: 2 },
        { id: 3, date: 3, deliveryDirector: 'Lannister', deliveryManager: 'Tyrion', portfolioStatus: 'Red', projectsOnTrack: 2, GM: 3, escalations: 50, highRisk: 3 },
        { id: 4, date: 4, deliveryDirector: 'Stark', deliveryManager: 'Sansa', portfolioStatus: 'Green', projectsOnTrack: 7, GM: 7, escalations: 10, highRisk: 0 },
        { id: 5, date: 5, deliveryDirector: 'Baratheon', deliveryManager: 'Brienne', portfolioStatus: 'Amber', projectsOnTrack: 5, GM: 4, escalations: 28, highRisk: 1 },
        { id: 6, date: 6, deliveryDirector: 'Greyjoy', deliveryManager: 'Theon', portfolioStatus: 'Red', projectsOnTrack: 1, GM: 2, escalations: 60, highRisk: 4 },
        { id: 7, date: 7, deliveryDirector: 'Martell', deliveryManager: 'Oberyn', portfolioStatus: 'Green', projectsOnTrack: 8, GM: 8, escalations: 5, highRisk: 0 },
        { id: 8, date: 8, deliveryDirector: 'Tyrell', deliveryManager: 'Margaery', portfolioStatus: 'Amber', projectsOnTrack: 3, GM: 3, escalations: 33, highRisk: 2 },
        { id: 9, date: 9, deliveryDirector: 'Bolton', deliveryManager: 'Ramsay', portfolioStatus: 'Red', projectsOnTrack: 2, GM: 1, escalations: 70, highRisk: 5 },
        { id: 10, date: 10, deliveryDirector: 'Clegane', deliveryManager: 'Sandor', portfolioStatus: 'Green', projectsOnTrack: 9, GM: 9, escalations: 3, highRisk: 0 }
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
                    backgroundColor: 'red',
                    height: '35px',
                    width: '35px',
                    borderRadius: '50%',
                    color: '#1a3e72',
                    fontWeight: '600',
                },
                '& .super-app.positive': {
                    backgroundColor: 'green',
                    height: '35px',
                    width: '35px',
                    borderRadius: '50%',
                    color: '#1a3e72',
                    fontWeight: '600',
                },
            }}>
                <DataGrid
                    rows={rows}
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
