import React from 'react';
import tree_green from '../../Assets/tree_green.png';
import tree_red from '../../Assets/tree_red.png';
import tree_black from '../../Assets/tree_black.png';
import treeimg from '../../Assets/treeimg.png';
import "./Matching_tree.css";


function Matching_tree() {
  return (
    <div>
        <section id="main-content" className="">
            <div className="wrapper main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                    <div className="page-title">

                        <div className="pull-left">
                           
                            <h1 className="title">Matching Tree</h1>
                           
                        </div>

                    </div>
                </div>
              </div>

              <div className="row">
                   <div className="col-lg-6">
                      <div className="search-box">
                         <form action="#" className="form-horizontal ng-pristine ng-valid" method="post" role="form">
                            <div className="form-wrapper">
                               <input className="form-control srch_frm" id="ddluserid" name="userId" type="text" value=""/>
                               <span className="field-validation-valid" data-valmsg-for="userId" data-valmsg-replace="true"></span>
                               <input type="submit" value="SUBMIT" id="Search" className="btn btn-sm btn-danger topmargin submit_btn "/>
                               
                               <button onclick="goBack()" type="button" className="btn btn-sm btn-danger topmargin float_rt">BACK</button>
                            </div>
                         </form>
                      </div>
                   </div>
                   <div className="col-lg-6">
                      <div className="tree_icon">
                         <div className="tree_name">
                            <img src={tree_green} width="40px" height="40px"/>
                            Active
                         </div>
                         <div className="tree_name">
                            <img src={tree_red} width="40px" height="40px"/>
                            In-Active
                         </div>
                         <div className="tree_name">
                            <img src={tree_black} width="40px" height="40px"/>
                            Not Registered
                         </div>
                      </div>
                   </div>
              </div>

              <div className="row">
                       <div className="col-md-12">
                          <div className="card">
                             <div id="tree" className="treeview" style={{margin: "40px auto"}}>
                                <div className="treemember">
                                   <div className="dropdown">
                                      <button className="dropbtn">
                                      <img src={tree_green} className="abc" onclick="Image_Click(364734)"/>
                                      </button>
                                      <div className="span" style={{color: "#fff"}}>
                                         User  <br/>
                                         364734
                                      </div>
                                      <div className="dropdown-content">
                                         <table className="tables" cellpadding="0px" cellspacing="0px">
                                            <tbody>
                                               <tr className="fgtybmd" style={{display: "none"}}>
                                                  <td className="table_heading">Sponsor Name:</td>
                                                  <td colspan="3">
                                                     Subham kumar
                                                  </td>
                                               </tr>
                                               <tr className="fgtybmd">
                                                  <td className="table_heading">Sponsor :</td>
                                                  <td className="grtydfbc" colspan="3">
                                                     719306
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Registration&nbsp;Date :</td>
                                                  <td className="grtydfbc">
                                                     31 Dec 2020
                                                  </td>
                                                  <td className="table_heading">Topup &nbsp;Date :</td>
                                                  <td className="grtydfbc">
                                                     31 Dec 2020
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Status :</td>
                                                  <td className="grtydfbc">
                                                     Active
                                                  </td>
                                                  <td className="table_heading">Package Name :</td>
                                                  <td className="grtydfbc">
                                                     Gleba
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Total Left :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                                  <td className="table_heading">Total Right :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Total Left Active :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                                  <td className="table_heading">Total Right Active :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Left Business :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                                  <td className="table_heading">Right Business :</td>
                                                  <td className="grtydfbc">
                                                     0
                                                  </td>
                                               </tr>
                                               <tr>
                                                  <td className="table_heading">Package amount :</td>
                                                  <td className="grtydfbc">
                                                     2500
                                                  </td>
                                               </tr>
                                            </tbody>
                                         </table>
                                      </div>
                                   </div>
                                </div>
                                <div className="connecter1">
                                   <img src={treeimg} style={{width: "480px", height: "33px"}}/>
                                </div>
                                <div className="tree_row">
                                   <div className="row_2_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_red} className="abc" onclick="Image_Click()"/>
                                         </button>
                                         <div className="span">
                                            <br/> 
                                         </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3"> 
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc"> 
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc"> 
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc"> 
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">  
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_2_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_red} className="abc" onclick="Image_Click()"/>
                                         </button>
                                           <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="tree_row" style={{height: "27px"}}>
                                   <div className="row_2_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "253px !important", height: "32px"}}/>
                                   </div>
                                   <div className="row_2_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "253px !important", height: "32px"}}/>
                                   </div>
                                </div>
                                <div className="tree_row">
                                   <div className="row_3_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_red} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_3_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_3_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_3_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div className="tree_row" style={{height: "27px"}}>
                                   <div className="row_3_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "129px !important", height: "27px"}}/>
                                   </div>
                                   <div className="row_3_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "129px !important", height: "27px"}}/>
                                   </div>
                                   <div className="row_3_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "129px !important", height: "27px"}}/>
                                   </div>
                                   <div className="row_3_child" style={{height: "27px"}}>
                                      <img src={treeimg} style={{width: "129px !important", height: "27px"}}/>
                                   </div>
                                </div>
                                <div className="tree_row">
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                           <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                   <div className="row_4_child">
                                      <div className="dropdown">
                                         <button className="dropbtn">
                                         <img src={tree_black} className="abc" onclick="Image_Click()"/>
                                         </button>
                                          <div className="span">
                                            <br/>
                                            
                                            
                                            </div>
                                         <div className="dropdown-content">
                                            <table className="tables" cellpadding="0px" cellspacing="0px">
                                               <tbody>
                                                  <tr className="fgtybmd" style={{display: "none"}}>
                                                     <td className="table_heading">Sponsor Name:</td>
                                                     <td colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr className="fgtybmd">
                                                     <td className="table_heading">Sponsor :</td>
                                                     <td className="grtydfbc" colspan="3">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Registration&nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Topup &nbsp;Date :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Status :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Package Name: Gleba</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Total Left Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Total Right Active :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Left Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                     <td className="table_heading">Right Business :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                                  <tr>
                                                     <td className="table_heading">Package amount :</td>
                                                     <td className="grtydfbc">
                                                     </td>
                                                  </tr>
                                               </tbody>
                                            </table>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

              
            </div>
          </div>
        </section>
    </div>
  )
}

export default Matching_tree