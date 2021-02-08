import React, {Component} from 'react';
import Header from "components/Header";
import Layout from "components/Layout";
import WriteMemo from "./WriteMemo";

import * as memoActions from 'modules/memo';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import MemoListContainer from "./MemoListContainer";
import MemoViewerContainer from './MemoViewerContainer';

class App extends Component {
    async componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);

        const {MemoActions} = this.props;
        try {
            await MemoActions.getInitialMemo();  // 초기 메모목록 디스패치
            this.getRecentMemo();  // 최신 메모목록
        } catch (e) {
            console.log(e)
        }
    }

    getRecentMemo  = () => {
        const { MemoActions, cursor } = this.props;
        MemoActions.getRecentMemo(cursor ? cursor : 0);

        // short-polling - 5초 마다 새데이터 불러오기 시도
        //자신의 창이 아닌 다른 창에서 (혹은 다른 사용자가) 작성을 해도 5초마다 새로운 데이터를 갱신하면서 새 데이터를 화면에 뿌려주게됩니다.
        setTimeout(()=>{
            this.getRecentMemo()
        },5000)
    };
    endCursor = 0;
    handleScroll = () => {
        const { clientHeight } = document.body;
        const { innerHeight } = window;

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // clientHeight + innerHeight = scrollTop =>  clientHeight - innerHeight - scrollTop 의 값이 0에 가까울 수록, 페이지의 끝
        if(clientHeight - innerHeight - scrollTop < 100) {
            /*
                왜냐하면 이 이벤트 리스너는 스크롤을 할 때마다
                 호출을 하기 때문에 중복 요청이 될 가능성이 있습니다.
                  따라서, 중복로딩을 방지하는 간단한 규칙을 만들어줘야합니다.
             */
            const { endCursor, MemoActions } = this.props;
            // endCursor 가 없거나, 이전에 했던 요청과 동일하다면 여기서 멈춘다.
            if(!endCursor || this.endCursor === endCursor) return;
            this.endCursor = endCursor;

            console.log(endCursor,'endCursor');

            MemoActions.getPreviousMemo(endCursor);
        }
    };

    render() {
        return (
            <Layout>
                <Header/>
                <Layout.main>
                    <WriteMemo />
                    <MemoListContainer />
                </Layout.main>
                <MemoViewerContainer />
            </Layout>
        );
    }
}

export default connect(
    (state) => ({
        cursor: state.memo.getIn(['data',0,'id']),
        endCursor: state.memo.getIn(['data', state.memo.get('data').size - 1, 'id'])
    }), // 현재는 비어있는 객체를 반환
    (dispatch) =>({
        MemoActions: bindActionCreators(memoActions, dispatch)
    })
)(App);