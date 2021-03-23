import styled from "styled-components"

const Wrapper = styled.main`
    display:grid;
    grid-template:auto auto / auto auto;
    grid-template-areas: "menu titulo"
                         "menu content"
`

export default Wrapper