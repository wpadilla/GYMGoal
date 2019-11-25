import {makeStyles} from "@material-ui/core";
import localDrawerStyles from "../Drawer/LocalDrawerStyles";
const drawerWidth = 233;

const localAppBarStylesObject = {
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    }
};

export default  makeStyles(theme => localAppBarStylesObject);
