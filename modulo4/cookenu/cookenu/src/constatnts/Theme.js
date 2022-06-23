import {createMuiTheme} from '@material-ui/core/styles'
import { colorPrimary, neutralColor } from './Color'
const theme = createMuiTheme({
    palette: {
        primary:{
            main:colorPrimary,
            contrastText:"beige"
        },
        text:{
            primary:neutralColor
        }
    }
})

export default theme