const openTextEditor = (e) => {
  e.preventDefault();
  if (e.keyCode == 69 && e.ctrlKey) {
    const textFieldValue = document.getElementById('js-text-field').innerHTML;
    const textEditorValue = document.getElementById('js-text-editor');
    textEditorValue.innerHTML = textFieldValue;
    textEditorValue.classList.add('text-editor-show');
    document.removeEventListener('keydown', openTextEditor);
    document.getElementById('js-text-editor').addEventListener('keydown', inputListener);
  }
};

const inputListener = (e) => {
  document.getElementById('js-text-field').innerHTML = e.target.value;
  if (e.keyCode == 83 && e.ctrlKey) {
    e.preventDefault();
    document.getElementById('js-text-editor').classList.remove('text-editor-show');
    document.removeEventListener('keydown', inputListener);
    document.addEventListener('keydown', openTextEditor);
  }
};

export { openTextEditor };
