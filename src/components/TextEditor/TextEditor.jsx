import React from 'react';
import {Editor, EditorState} from 'draft-js';
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

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  updateEditorState(editorState){
    this.setState({editorState});
  }

  render() {
    return (
      <EditorWrapper>
        <Toolbar editorState={this.state.editorState} updateEditorState = {this.updateEditorState.bind(this)}/>
        <EditorContainer>
          <Editor 
              editorState={this.state.editorState}
              onChange={this.updateEditorState.bind(this)}
          />
        </EditorContainer>
       </EditorWrapper>
    );
  }
}