import React from "react";
import styled from "styled-components";
import {RenderInlineStyles} from "./inlineStyles"

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 35px;
  padding: 5px 7px;
  border-radius: 4px 4px 0 0;
  border: 1px solid #236798;
  border-bottom:none;
`;

export default function Toolbar(props){
    return (
      <ToolbarContainer>
        <RenderInlineStyles
            editorState={props.editorState}
            updateEditorState={props.updateEditorState}
        />
      </ToolbarContainer>
    );
}