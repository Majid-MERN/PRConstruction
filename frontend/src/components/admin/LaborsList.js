// import React, { Fragment, useEffect, useState } from "react";
// import MetaData from "../layout/MetaData";

// import { MDBDataTable } from 'mdbreact';
// import Sidebar from "./Sidebar";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useAlert } from 'react-alert';
// import { useDispatch, useSelector } from 'react-redux'
// import { getAdminLabors, deleteLabor, clearErrors } from '../../actions/laborActions';
// import { DELETE_LABOR_RESET } from '../../constants/laborConstants'
// const LaborsList = ({history}) => {

//   const alert = useAlert();
//     const dispatch = useDispatch();
//     const { loading, error, labors } = useSelector(state => state.labors);

//   const [labourData, setLabourData] = useState([]);
//   const { error: deleteError, isDeleted } = useSelector(state => state.labor)
//   useEffect(() => {
//     dispatch(getAdminLabors("http://localhost:4000/api/v1/admin/labors"));

  

//         if (deleteError) {
//             alert.error(deleteError);
//             dispatch(clearErrors())
//         }

//         if (isDeleted) {
//           alert.success('Labor deleted successfully');
//           history.push('/admin/labors');
//           dispatch({ type: DELETE_LABOR_RESET })
//       }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [alert, isDeleted, history]);


//   const setLabors = () => {
//     const data = {
//         columns: [
//             {
//                 label: 'ID',
//                 field: 'id',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Name',
//                 field: 'name',
//                 sort: 'asc'
//             },
//             {
//                 label: 'CNIC',
//                 field: 'cnic',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Type',
//                 field: 'type',
//                 sort: 'asc'
//             },
//             {
//                 label: 'Actions',
//                 field: 'actions',
//             },
//         ],
//         rows: []
//     }

//     labors.forEach(labor => {
//         data.rows.push({
//             id: labor._id,
//             name: labor.name,
//             cnic:labor.cnice,
//             type: labor.type,
//             actions: <Fragment>
//                 <Link to={`/admin/labor/${labor._id}`} className="btn btn-primary py-1 px-2">
//                     <i className="fa fa-pencil"></i>
//                 </Link>
//                 <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteLaborHandler(labor._id)}>
//                     <i className="fa fa-trash"></i>
//                 </button>
//             </Fragment>
//         })
//     })

//     return data;
// }




// const deleteLaborHandler = (id) => {
//   dispatch(deleteLabor(id))
// }

// return (
//   <Fragment>
//       <MetaData title={'All Products'} />
//       <div className="row">
//           <div className="col-12 col-md-2">
//               <Sidebar />
//           </div>

//           <div className="col-12 col-md-10">
//               <Fragment>
//                   <h1 className="my-5">All Labors</h1>

//                   {loading ? <Loader /> : (
//                       <MDBDataTable
//                           data={setLabors()}
//                           className="px-3"
//                           bordered
//                           striped
//                           hover
//                       />
//                   )}

//               </Fragment>
//           </div>
//       </div>

//   </Fragment>
// )
// }

// //  

// export default LaborsList;














// // import React, { Fragment, useEffect, useState } from "react";
// // import MetaData from "../layout/MetaData";
// // import Sidebar from "./Sidebar";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const LaborsList = () => {
// //   const [labourData, setLabourData] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:4000/api/v1/admin/labors")
// //       .then((response) => {
// //         if (response.data.success) setLabourData(response.data.labors);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   }, []);

// //   return (
// //     <Fragment>
// //       <MetaData title={"New Product"} />
// //       <div className="row">
// //         <div className="col-12 col-md-2">
// //           <Sidebar />
// //         </div>

// //         <div className="col-12 col-md-10">
// //           <Fragment>
// //             <h1 className="my-5">All Labors</h1>
// //             <div id="example_wrapper" className="dataTables_wrapper my-5">
// //               <div className="dataTables_length" id="example_length">
// //                 <label>
// //                   Show{" "}
// //                   <select
// //                     name="example_length"
// //                     aria-controls="example"
// //                     className
// //                   >
// //                     <option value={10}>10</option>
// //                     <option value={25}>25</option>
// //                     <option value={50}>50</option>
// //                     <option value={100}>100</option>
// //                   </select>{" "}
// //                   entries
// //                 </label>
// //               </div>
// //               <div id="example_filter" className="dataTables_filter">
// //                 <label>
// //                   Search:
// //                   <input
// //                     type="search"
// //                     className
// //                     placeholder
// //                     aria-controls="example"
// //                   />
// //                 </label>
// //               </div>
// //               <table
// //                 id="example"
// //                 className="display dataTable"
// //                 style={{ width: "100%" }}
// //                 aria-describedby="example_info"
// //               >
// //                 <table class="table">
// //                   <thead>
// //                     <tr>
// //                       <th>ID</th>
// //                       <th>Name</th>
// //                       <th>CNIC</th>
// //                       <th>Type</th>
// //                       <th>Action</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {labourData?.map((labor) => {
// //                       return (
// //                         <tr key={labor._id}>
// //                           <td data-label="S.No">{labor._id}</td>
// //                           <td data-label="Name">{labor.name}</td>
// //                           <td data-label="Age">{labor.cnic}</td>
// //                           <td data-label="Marks%">{labor.type}</td>
// //                           <td data-label="Staus">
// //                             {" "}
// //                             <Link to={`/admin/updatelabor/${labor._id}`}>
// //                               <i className="fa fa-pencil"></i>{" "}
// //                             </Link>{" "}
// //                             <i className="fa fa-trash"></i>{" "}
// //                           </td>
// //                         </tr>
// //                       );
// //                     })}
// //                   </tbody>
// //                 </table>
// //               </table>
// //               <div
// //                 className="dataTables_info"
// //                 id="example_info"
// //                 role="status"
// //                 aria-live="polite"
// //               >
// //                 Showing {labourData.length} to {labourData.length} of{" "}
// //                 {labourData.length} entries
// //               </div>
// //             </div>
// //           </Fragment>
// //         </div>
// //       </div>
// //     </Fragment>
// //   );
// // };

// // export default LaborsList;






// // import React, { Fragment, useEffect,useState } from 'react'
// // import MetaData from "../layout/MetaData";
// // import Sidebar from "./Sidebar";


// // import { Link } from 'react-router-dom'
// // import { MDBDataTable } from 'mdbreact'
// // import Loader from '../layout/Loader'


// // import { useAlert } from 'react-alert'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { getAdminLabors,deleteLabor, clearErrors } from '../../actions/laborActions'
// // import { DELETE_LABOR_RESET } from '../../constants/laborConstants'

// // const LaborsList = () => {
  

// //   const alert = useAlert();
// //     const dispatch = useDispatch();

// //     const { loading, error, labors } = useSelector(state => state.labors);
// //     const { error: deleteError, isDeleted } = useSelector(state => state.labor)

// //   useEffect(() => {
// //     dispatch(getAdminLabors());
    
       

// //         if (error) {
// //           alert.error(error);
// //           dispatch(clearErrors())
// //       }

// //       if (deleteError) {
// //           alert.error(deleteError);
// //           dispatch(clearErrors())
// //       }

// //       if (isDeleted) {
// //           alert.success('Labor deleted successfully');
// //           history.push('/admin/labors');
// //           dispatch({ type: DELETE_LABOR_RESET })
// //       }
 
    
     
// //   }, [dispatch, alert, error, deleteError, isDeleted, history]);






// //   const setLabors = () => {
// //     const data = {
// //         columns: [
// //             {
// //                 label: 'ID',
// //                 field: 'id',
// //                 sort: 'asc'
// //             },
// //             {
// //                 label: 'Name',
// //                 field: 'name',
// //                 sort: 'asc'
// //             },
// //             {
// //                 label: 'Cnic',
// //                 field: 'cnic',
// //                 sort: 'asc'
// //             },
// //             {
// //                 label: 'Type',
// //                 field: 'type',
// //                 sort: 'asc'
// //             },
// //             {
// //                 label: 'Actions',
// //                 field: 'actions',
// //             },
// //         ],
// //         rows: []
// //     }

// //     labors.forEach(labor => {
// //         data.rows.push({
// //             id: labor._id,
// //             name: labor.name,
// //             cnic: labor.cnic,
// //             type: type.type,
// //             actions: <Fragment>
// //                 <Link to={`/admin/labor/${labor._id}`} className="btn btn-primary py-1 px-2">
// //                     <i className="fa fa-pencil"></i>
// //                 </Link>
// //                 <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteLaborHandler(labor._id)}>
// //                     <i className="fa fa-trash"></i>
// //                 </button>
// //             </Fragment>
// //         })
// //     })

// //     return data;
// // }


// // const deleteLaborHandler = (id) => {
// //   dispatch(deleteLabor(id))
// // }





// //   return (
// //     <Fragment>
// //             <MetaData title={'All Labors'} />
// //             <div className="row">
// //                 <div className="col-12 col-md-2">
// //                     <Sidebar />
// //                 </div>

// //                 <div className="col-12 col-md-10">
// //                     <Fragment>
// //                         <h1 className="my-5">All Labors</h1>

// //                         {loading ? <Loader /> : (
// //                             <MDBDataTable
// //                                 data={setLabors()}
// //                                 className="px-3"
// //                                 bordered
// //                                 striped
// //                                 hover
// //                             />
// //                         )}

// //                     </Fragment>
// //                 </div>
// //             </div>

// //         </Fragment>
// //   )
// // };

// // export default LaborsList;

import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";

import { MDBDataTable } from 'mdbreact';
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import {  deleteLabor, clearErrors } from '../../actions/laborActions';
import { DELETE_LABOR_RESET } from '../../constants/laborConstants'
const LaborsList = ({history}) => {

  const alert = useAlert();
    const dispatch = useDispatch();

  const [labourData, setLabourData] = useState([]);
  const { error: deleteError, isDeleted } = useSelector(state => state.labor)
  useEffect(() => {

    axios
      .get("http://localhost:4000/api/v1/admin/labors")
      .then((response) => {
        if (response.data.success) setLabourData(response.data.labors);

        if (isDeleted) {
          alert.success('Labor deleted successfully');
          history.push('/admin/labors');
          dispatch({ type: DELETE_LABOR_RESET })
      }
      })
      .catch((error) => {
        console.log(error);
      });

      

  }, [alert, isDeleted, history]);

const deleteLaborHandler = (id) => {
  dispatch(deleteLabor(id))
}


  return (
    <Fragment>
      <MetaData title={"New Product"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Labors</h1>
            <div id="example_wrapper" className="dataTables_wrapper my-5">
              <div className="dataTables_length" id="example_length">
                <label>
                  Show{" "}
                  <select
                    name="example_length"
                    aria-controls="example"
                    className
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div id="example_filter" className="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    
                    className
                    placeholder
                    aria-controls="example"
                  />
                </label>
              </div>
              <table
                id="example"
                className="display dataTable"
                style={{ width: "100%" }}
                aria-describedby="example_info"
              >
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>CNIC</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                  
                    {labourData?.map((labor) => {
                      
                      return (
                        
                        <tr key={labor._id}>
                        
                          <td data-label="S.No">{labor._id}</td>
                          <td data-label="Name">{labor.name}</td>
                          <td data-label="Age">{labor.cnic}</td>
                          <td data-label="Marks%">{labor.type}</td>
                          <td data-label="Staus">
                            {" "}
                            <Link to={`/admin/updatelabor/${labor._id}`}>
                              <i className="fa fa-pencil"></i>{" "}
                            </Link>{" "}
                            
                            
                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteLaborHandler(labor._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                           
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </table>
              <div
                className="dataTables_info"
                id="example_info"
                role="status"
                aria-live="polite"
              >
                Showing {labourData.length} to {labourData.length} of{" "}
                {labourData.length} entries
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default LaborsList;