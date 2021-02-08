import axios from "axios";

export const createMemo = ({title, body}) => axios.post('/memo',{title,body});
export const getInitialMemo = () => axios.get('/memo/?_sort=id&_order=DESC&_limit=20'); // 역순으로 최근 작성된 포스트 20개를 불러온다.
export const getRecentMemo = (cursor) => axios.get(`/memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&`); // cursor 기준 최근 작성된 메모를 불러온다. 이 함수는, cursor (memo 의 id)를 파라미터로 받아와서 그 값보다 큰 id 를 가진 메모들을 불러옵니다. 또한, 초기로딩을 했을때와 동일하게, 역순으로 정렬되어있습니다.cursor 는, 기준점이라는 의미로 이해하시면 되겠습니다.
export const updateMemo = ({id, memo:{ title, body }}) => axios.put(`/memo/${id}`,{title,body});
export const deleteMemo  = (id) => axios.delete(`/memo/${id}`);
// 특정 id보다 작은 id 값을 가진 메모리스트를 불러옵니다.
export const getPreviousMemo = (endCursor) => axios.get(`/memo/?_sort=id&_order=DESC&_limit=20&id_lte=${endCursor-1}`); // endCursor 기준 이전 작성된 메모를 불러온다
