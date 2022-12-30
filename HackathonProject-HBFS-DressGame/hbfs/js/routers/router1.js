/* Router Module <3
 */

import * as hairController from '../controller/haircontroller.js.js';

const defaultHash = '#hair';
const routes = [
    {
        hash: '#hair',
        controller: hairController
    },
    {
        hash: '#route2',
        controller: faceController
    }
];
function loadController() {
    const mapping = routes.find(mapping => mapping.hash === window.location.hash);
    if (!mapping) {
        window.location.hash = defaultHash;
        return;
    }
    const { controller } = mapping;
    controller.start();
}
export function start() {
    window.location.hash = window.location.hash || defaultHash;
    loadController();
    window.addEventListener('hashchange', loadController);
}