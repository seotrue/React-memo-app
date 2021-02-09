# React로 메모에플리케이션 구현하기
- React로 프론트단을 구현 / json-server server 대응

### 기능
- 메모 작성 
- 메모 수정(상세보기), 삭제 
- 스크롤 인피니티로 기존 메모 로드

### 사용 라이브러리 설치
- pender : 액션 사용 시 자동으로 성공, 실패, 진행의 액션을 나눠줌
```
...pender({
        type: GET_PREVIOUS_MEMO,
        // api 호출 시 성공
        onSuccess: (state, action) => {
            const data = state.get('data');
            return state.set('data', data.concat(fromJS(action.payload.data)))
        }
    })
```
- immutale : 불변성을 지키기 위해 제공하는 Map, set, get 등 사용  
    개인적으로 immer 사용이 더 편했다
```
     [CLOSE_VIEWER] : (state, action) => state.setIn(['memo','open'],false),
```
  
- Json-server:  server 대응해주는 라이브러리      
> fake-server - db.json // json 의 데이터를 잡아주면 알아서 API 호출 가능

### 폴터 구조
`components` : 기능별  
`contauners` : 컴포넌트를 감싸는 큰 상위
`lib` : util 모음  
`modlues` : 액션
`sheard` : 인풋창 등 자주 사용하는 컴포넌트 

### 구조화
```
+-- componenrs
|   +-- MemoList
|       +-- index.js
|       +-- Memo.js // 메모의 제목, 내용, 상세열기(onClick)  
|       +-- MemoList.js
+-- container 
    +-- MenoListContainer.js // 스토어에서 데이터를 가져와 props로 내려준다.
```
- 작성 메모  
```
+-- componenrs
|   +-- WriteMemo
|       +-- index.js
|       +-- inputPlaceholder.js
|       +-- WhiteBox.js

```
- 메모 수정, 삭제

- 메모 저장
- 메모 로드 
- 레이아웃
