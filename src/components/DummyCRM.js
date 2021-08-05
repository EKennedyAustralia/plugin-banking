import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import ReactGoogleSlides from "react-google-slides";


class DummyCRM extends React.Component {

      render() {
        
        

        if(this.props.task === undefined){
            return (
              <div style={{background: "#ffffff", minHeight: "100vh", paddingLeft: "20px"}}>
                <img style={{ maxHeight: "50vh", position: "absolute", top: "20vh", left: '20vh'}}src="https://s.yimg.com/ny/api/res/1.2/YF3cwx2e9cPxIbw7EZtrcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MC4zMDc2OTIzMDc2OTIz/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-10/ac6f1130-0c27-11eb-bfcd-3db9c82f4201"></img>
                {/* <div style={{ minHeight: "10vh"}}></div>
                <ReactGoogleSlides
                  width={1200}
                  height={675}
                  slidesLink="https://docs.google.com/presentation/d/1OrGIj-ODPywiv9GjdHR37kC8o19F6uyab5qZ0r06R_w"
                  // showControls
                  loop
                /> */}
              </div>

            );

        }
        var screenpop = { 
        "screenPopTitle": "Suspicious Transaction Follow-up Call",
        "screenPopSubtitle": "Customer requested followup via mobile app notification",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Mark Hannan"
          },
          {
            "key": "Customer Account Number",
            "value": "062-225 1027 7411"
          },
          {
            "key": "Date of Birth",
            "value": "02-08-1984"
          },
          {
            "key": "Residential Address",
            "value": "1 George Street, Sydney, NSW 2000"
          }
        ],
        "screenPopFields2": [
          {
            "key": "Merchant",
            "value": "Ola Cabs - Melbourne, Australia"
          },
          {
            "key": "Device Trust Score",
            "value": "0.3"
          },
          {
            "key": "Method",
            "value": "Online payment Gateway - CVV"
          },
          {
            "key": "Fraud Flag",
            "value": "Transaction processed overseas"
          }
        ],
        "screenPopTable1": {
          "title": "Contact History",
          "columns": [
            "Case ID",
            "Description",
            "Priority",
            "Status",
            "Creation Date"
          ],
          "rows": [
            {
              "values": [
                "CAS1231",
                "Address Change",
                "1",
                "Residential Address updated.",
                "12-Jan-2020"
              ]
            },
            {
              "values": [
                "CAS10078",
                "Billing updated",
                "4",
                "Change of direct debit details",
                "14-Mar-2018"
              ]
            },
            {
              "values": [
                "CAS10456",
                "Name Change",
                "4",
                "Marriage Certificate provided",
                "14-Mar-2008"
              ]
            }
          ]
        },
        "screenPopTable2": {
          "title": "Transaction History",
          "columns": [
            "Date",
            "Merchant",
            "value",
            "Status",
            
            
          ],
          "rows": [
            {
              "values": [
                "03-08-2021",
                "Ola Cabs - Melbourne, Australia",
                "$28",
                "Suspicious",
                
                
              ]
            },
            {
              "values": [
                "12-Jan-2020",
                "Apple - George Street",
                "$1,000",
                "Approved",
                
                
              ]
            },
            {
              "values": [
                "26-Aug-2019",
                "JB Hi-Fi - The Grand Arcade",
                "$1,320",
                "Approved",
                
                
              ]
            },
          ]
        }
      }
        // var screenpop = this.props.task.attributes;

        return (
        <div style={{background: "#f4f4f4", minHeight: "100vh"}}>
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "1150px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <span class="card-title">{screenpop.screenPopTitle}</span>
                    <p>{screenpop.screenPopSubtitle}</p>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "100px", minWidth: "100px", marginRight: "auto"}} src="data:image/png;base64,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" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{marginLeft: "30px"}}>
                  <div class="card-image">
                    <img style={{maxWidth: "200px", minWidth: "200px", marginRight: "auto"}} src="https://ca.slack-edge.com/EFUJK1UC8-WR6US3DQD-4d17dd35c157-512" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="collection" style={{minWidth: "930px", maxWidth: "930px", minHeight:"200px",  marginLeft: "auto",  marginRight: "auto"}}>                    
                    { screenpop.screenPopFields.map((fields) => {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{maxWidth: "570px", minWidth: "570px", minHeight:"300",  marginLeft: "30px",  marginRight: "auto"}}>
                    <div class="card-content">
                      <span class="card-title">{ screenpop.screenPopTable1.title }</span>
                      <table class="highlight">
                        <tr>
                          {screenpop.screenPopTable1.columns.map((column) => {
                            return (<th>{column}</th>)
                            })}
                        </tr>
                          {screenpop.screenPopTable1.rows.map((row) => {
                            return (
                              <tr>
                                { row.values.map((col) => {
                                    return <td>{col}</td>
                                      }) }
                                  </tr>
                              )
                            })
                          }
                        </table>
                        </div>
                    </div>
              </div>
              <div class="col">
                <div class="card" style={{maxWidth: "570px", minWidth: "570px", minHeight:"300",  marginLeft: "auto",  marginRight: "auto"}}>
                    <div class="card-content">
                      <span class="card-title">{ screenpop.screenPopTable2.title }</span>
                      <table class="highlight">
                        <tr>
                          {screenpop.screenPopTable2.columns.map((column) => {
                            return (<th>{column}</th>)
                            })}
                        </tr>
                          {screenpop.screenPopTable2.rows.map((row) => {
                            return (
                              <tr>
                                { row.values.map((col) => {
                                    return <td>{col}</td>
                                      }) }
                                  </tr>
                              )
                            })
                          }
                        </table>
                        </div>
                    </div>
              </div>
            </div>
            <div class="row">
            <div class="col">
                <div class="card" style={{minWidth: "730px", maxWidth: "730px", minHeight:"200px",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="collection">                    
                    { screenpop.screenPopFields2.map((fields) => {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                    })}
                  </div>
                </div>
              </div> 
              <div class="col">
                <div class="card">
                  <div class="card-image">
                    <img style={{maxWidth: "400px", minWidth: "400px", marginRight: "auto"}} src="https://i.pointhacks.com/2018/10/05140609/Commbank-Diamond-Awards.jpg" />
                  </div>
                </div>
              </div>
            </div>      
          </div> 
            );
    }
}

export default withTaskContext(DummyCRM);
