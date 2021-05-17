import {Container, Wrapper} from './styles'

import {Main} from '../Main'
import {FMenu} from '../FMenu'

export function Layout() {
    return (
        <Container>
          <Wrapper>

            <Main />
            <FMenu />
            
          </Wrapper>
        </Container>
      );
}