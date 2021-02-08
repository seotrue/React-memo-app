### jsconfig.json
프로젝트 루트 설정을 하고 나서도 VSCode 에서 불러온 파일의 세부정보들을 제대로 불러와서 자동완성이 제대로 작동하도록 해줍니다.


### 디렉터리 구조
- 프로젠테이션널 컴포넌트   
    WhiteBox 그림자가 있는 흰색 박스입니다.  
    InputPlaceholder 흰색 박스를 클릭하기전, "메모를 입력하세요.." 를 띄우는 컴포넌트 입니다.
    InputSet input 과 textarea 가 함께 있는 세트입니다.
    SaveButton 오른쪽에 정렬된 완료 버튼 입니다.
    
- 컨테이너 컴포넌트   
    WriteMemo 리덕스와 상태를 연동하여 작성 기능이 작동하게 해주는 컴포넌트입니다.

일반 DOM 엘리먼트가 아닌 컴포넌트를 스타일링 할 때에는 styled(Component) 형식으로 스타일링합니다.

콜백 ref [https://ko.reactjs.org/docs/refs-and-the-dom.html]


서버 실행
json-server --watch db.json --port 3001

Immutable js 
https://pks2974.medium.com/immutable-js-%EA%B0%84%EB%8B%A8%EC%A0%95%EB%A6%AC-bbd5ad20bbdf


