import {Container, Wrapper} from './styles'

import {Main} from '../Main'
import {FavoriteMenu} from '../FavoriteMenu'

export function Layout() {
    return (
        <Container>
          <Wrapper>

            <Main />
            <FavoriteMenu />
            
          </Wrapper>
        </Container>
      );
}