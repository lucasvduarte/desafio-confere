import { memo } from 'react';
import AppBar from '../component/appBar/AppBar.component';
import Routes from "./Routes.container";

function MenuC() {

    return (
        <>
            <AppBar></AppBar>
            <div style={{ marginTop: 100 }}>
                <Routes />
            </div>
        </>
    );
}

export default memo(MenuC)
