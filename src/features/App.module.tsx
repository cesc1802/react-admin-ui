import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import history from "../common/history";
import store from "../common/store"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import {orange, blue, grey} from "@material-ui/core/colors";
import RootLayout from "./layout";

const theme = createMuiTheme({
    status: {
        danger: orange[500]
    },
    overrides: {
        MuiAccordionDetails: {
            root: {
                "&:hover": {
                    color: blue[900],
                    backgroundColor: grey[100]
                }
            }
        },
        MuiAccordionSummary: {
            root: {
                "&:hover": {
                    color: blue[900],
                    backgroundColor: grey[100]
                }
            }
        }
    }
})


function AppModule() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <RootLayout/>
                </ConnectedRouter>
            </Provider>
        </ThemeProvider>
    )
}

export default AppModule;
