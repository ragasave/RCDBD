const Vue = require('vue');
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'

if (window.VALID_APP) {

    /** connector */
    window.adjustLine = function (fromTable, formColumn, toTable, toColumn, connector) {
        if (!fromTable || !formColumn || !toTable || !toColumn) { return }
        if (!connector) {
            var connector = document.createElement("div");
            document.querySelector('.playground-board-tables').appendChild(connector);
        }
        // console.log(toColumn);
        var fromTableWidth = fromTable.offsetWidth;
        var toTableWidth = toTable.offsetWidth;
        var fromTableLeft = fromTable.parentElement.offsetLeft;
        var toTableLeft = toTable.parentElement.offsetLeft;
        var fT = Number(fromTable.dataset.top || 0) + formColumn.offsetTop + 33 + formColumn.offsetHeight / 2;
        var tT = Number(Number(toTable.dataset.top || 0)) + toColumn.offsetTop + 33 + toColumn.offsetHeight / 2;
        var fL = Number(fromTable.dataset.left || 0) + formColumn.offsetLeft - 50;
        var tL = Number(Number(toTable.dataset.left || 0) + toColumn.offsetLeft - 50);

        // console.log(fL , tL, connector, fromTable, toTable);
        // console.log(fromTable, connector , [fL , fromTableWidth/2], [tL , toTableWidth/2]);
        // console.log(connector);

        if (fL + fromTableWidth / 2 > tL + toTableWidth / 2) {
            // console.log('right', fL + fromTableWidth > tL + (toTableWidth * 2));

            if (fL + fromTableWidth > tL + (toTableWidth * 2)) {
                fL = fL;
                tL = tL + toTableWidth;
                connector.style.borderLeft = '1px solid';
                connector.style.borderRight = 'none';

            } else {
                // console.log('hereT');
                fL = fL + fromTableWidth;
                tL = tL + toTableWidth;
                connector.style.borderRight = '1px solid';
                connector.style.borderLeft = 'none';

            }
        } else {
            // console.log('here');
            // console.log('left');
            if (fL + fromTableWidth < tL) {
                fL = fL + fromTableWidth;
                // connector.style.borderRight = '1px solid';
                // connector.style.borderLeft = 'none';
            } else {
                fL = fL + fromTable.offsetWidth;
                tL = tL + toTable.offsetWidth;
                connector.style.borderRight = '1px solid';
                connector.style.borderLeft = 'none';
            }
        }

        // return;



        var CA = Math.abs(tT - fT);
        var CO = Math.abs(tL - fL);
        var H = Math.sqrt(CA * CA + CO * CO);
        var ANG = 180 / Math.PI * Math.acos(CA / H);

        if (tT > fT) {
            var top = (tT - fT) / 2 + fT;
        } else {
            var top = (fT - tT) / 2 + tT;
        }
        if (tL > fL) {
            var left = (tL - fL) / 2 + fL;
        } else {
            var left = (fL - tL) / 2 + tL;
        }

        if ((fT < tT && fL < tL) || (tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)) {
            ANG *= -1;
        }
        top -= H / 2;

        connector.style["-webkit-transform"] = 'rotate(' + ANG + 'deg)';
        connector.style["-moz-transform"] = 'rotate(' + ANG + 'deg)';
        connector.style["-ms-transform"] = 'rotate(' + ANG + 'deg)';
        connector.style["-o-transform"] = 'rotate(' + ANG + 'deg)';
        connector.style["-transform"] = 'rotate(' + ANG + 'deg)';
        connector.style.top = top + 'px';
        connector.style.left = left + 'px';
        connector.style.height = H + 'px';

        // to pointer
        // connector.querySelector('.to-table-connector-pointer').style.top    = top+'px';
        // connector.querySelector('.to-table-connector-pointer').style.left   = left+'px';
    }


    window.Vue = Vue;
    const app = new Vue({
        vuetify,
        router,
        el: '#app',
        components: {
            App
        },
        render: h => h(App)
    });
}
