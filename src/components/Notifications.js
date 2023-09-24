import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { NOTIFICATIONS } from "../utility/messages";

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />

const Notifications = (props) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={props.openSnackbar}
                autoHideDuration={NOTIFICATIONS.NOTIFICATION_DURATION}
                onClose={props.onCloseMethod}
            >
                <Alert onClose={props.onCloseMethod} severity={props.severityType}>
                    {props.messageData}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Notifications
