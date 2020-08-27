/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

tinymce.init({
  selector: "textarea#tinymce-editor",
  plugins:
    "a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker",
  toolbar:
    "a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table",
  toolbar_mode: "floating",
  tinycomments_mode: "embedded",
  tinycomments_author: "Author name",
});
