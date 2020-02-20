import React, { Component } from "react";
import {WritterWrapper,WritterItem} from '../style'
import {connect} from 'react-redux'
class Writter extends Component {
  render() {
    return (
      <WritterWrapper>
        {
          this.props.writterList.map((item)=>{
            return(
              <WritterItem key={item.get('id')}>
              <a href="/" className="avater">
                <img src={item.get('imgUrl')} alt=""/>
              </a>
              <a href="/" className="follow">+关注</a>
              <a href="/">
                <p className="name">{item.get("writterName")}</p>
                <p className="writerW">
              {item.get("writterWrite")}
            </p>
              </a>
            </WritterItem>
            )
          })
        }
       
      </WritterWrapper>
    )
  }
}
const mapState = state=>{
  return {
    writterList:state.get('home').get('writterList')
  }
}
export default connect(mapState,null)(Writter);
