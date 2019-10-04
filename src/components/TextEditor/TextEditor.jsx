import React, {useState} from 'react';
import {Editor, EditorState,InlineToolbar} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import styled from 'styled-components'
import Toolbar from '../Toolbar/Toolbar';
import './textEditor.scss'

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top:10px;
`;

const EditorContainer = styled.div`
  display: flex;
  min-height: 185px;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  padding: 5px;
  font-size: 17px;
  font-weight: 300;
  border: 1px solid #236798;
`;

export default function MyEditor({input: {value, onChange}}){
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  let updateEditorState = (editorState) => {
    onChange(stateToHTML(editorState.getCurrentContent()));
    setEditorState(editorState);
  }


    return (
      <EditorWrapper>
        <Toolbar editorState={editorState} updateEditorState = {updateEditorState}/>
        <EditorContainer>
          <Editor 
              editorState={editorState}
              onChange={updateEditorState}
          />
        </EditorContainer>
       </EditorWrapper>
    );
}