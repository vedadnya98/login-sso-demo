import React, { useEffect, useState } from "react";
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";
import Button from '@material-ui/core/Button';
import useStyles from './SSOButton.styles';

export default function SSOButton() {
    const classes = useStyles();
    const isAuthenticated = useIsAuthenticated();
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        async function getData() {
            let response = await instance.acquireTokenSilent({
                ...loginRequest,
                account: accounts[0]
            }).then((response) => {
                    return callMsGraph(response.accessToken)
        });
            console.log(response)
            setGraphData(response)
        }
        if(accounts.length>0){
        console.log(accounts)
        // Cognito log in with email of this user
        getData()
        }
      }, [accounts]);

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
}

const handleLogout = () => {
    instance.logoutRedirect({
        postLogoutRedirectUri: "/",
    });
}

//Example Data
// userData = {
//     "@odata.context":"https://graph.microsoft.com/v1.0/$metadata#users/$entity",
//     "businessPhones":[
       
//     ],
//     "displayName":"Vedadnya Jadhav",
//     "givenName":"Vedadnya",
//     "jobTitle":null,
//     "mail":"vedadnya@vivpro.ai",
//     "mobilePhone":null,
//     "officeLocation":null,
//     "preferredLanguage":null,
//     "surname":"Jadhav",
//     "userPrincipalName":"vedadnya@vivpro.ai",
//     "id":"ea19002a-99b9-4436-a8aa-287ee20b1912"
//  }

    return (
        // <>
        // { isAuthenticated ? 
        // <Button className={classes.SSOButton} onClick={() => handleLogout()}>Sign Out</Button>
        //  : 
        // <Button className={classes.SSOButton} onClick={() => handleLogin()}>Sign in</Button>
        // }
        // {graphData ?
        //         <div>{JSON.stringify(graphData, null, '\t')}</div>
        //         :
        //         null
        //      }
        // </>
        <Button className={classes.SSOButton} onClick={() => handleLogin()}>SIGN IN with SSO</Button>
    );
}
