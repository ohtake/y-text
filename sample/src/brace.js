import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Y from 'yjs/dist/y.es6';
import yArray from 'y-array';
import yWebsocketsClient from 'y-websockets-client';
import yMemory from 'y-memory';
import yText from '../../src/Text';

Y.extend(yArray, yWebsocketsClient, yMemory, yText);

window.addEventListener('load', () => {
  var editor = brace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");

  Y({
    db: {
        name: 'memory'
    },
    connector: {
        name: 'websockets-client',
        room: 'my-room'
    },
    share: {
        textarea: 'Text'
    }
  }).then(function(y) {
    y.share.textarea.bind(editor);
  })
});
