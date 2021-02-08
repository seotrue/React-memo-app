import { css } from 'styled-components';

/*
    한 줄 이상의 문장(객체 리터럴)을 반환하려면 중괄호({})대신 괄호(())를 사용해서 함수를 묶어야합니다.
    이렇게 하면 함수가 한 문장으로 작성되었음을 나타낼 수 있습니다.
*/
export const media = ({
    desktop:(...args) => css`
        @media (max-width:1200px) {
            ${css(...args)}
        }
    `,
    tablet: (...args) => css`
        @media (max-width:992px) {
            ${css(...args)}
        }
    `,
    mobile: (...args) => css`
        @media (max-width: 600px){
            ${css(...args)}
        }
    `
});