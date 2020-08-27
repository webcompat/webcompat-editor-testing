/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Quill from "quill/dist/quill.min";
import "quill/dist/quill.core";

var quill = new Quill("#quill-editor-container", {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
  },
  placeholder: "Compose an epic...",
  theme: "snow", // or 'bubble'
}); // First matching element will be used
