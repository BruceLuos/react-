import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Writter from '../home/components/Writter'
import {
  DetailWrapper,
  Header,
  Content,
  DetailLeft,
  DetailRight
} from "./style";
import { actionCreators } from "./store";
import {actionCreater} from '../home/store'

class Detail extends PureComponent {
  render() {
    return (
      <div style={{"backgroundColor": "#f9f9f9"}}>
        <DetailWrapper>
          <DetailLeft>
            <Header>{this.props.title}</Header>
            <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
          </DetailLeft>

          <DetailRight>
            <Writter></Writter>
          </DetailRight>
        </DetailWrapper>
      </div>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
  changeHomeData() {
    dispatch(actionCreater.getHomeInfo());
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
