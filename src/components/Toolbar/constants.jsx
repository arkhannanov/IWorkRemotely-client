import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBold,
  faUnderline,
  faItalic,
  faList
} from "@fortawesome/free-solid-svg-icons";

const inlineStyles = [
  {
    label: "bold",
    style: "BOLD",
    icon: <FontAwesomeIcon icon={faBold} />
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <FontAwesomeIcon icon={faItalic} />
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <FontAwesomeIcon icon={faUnderline} />
  },

  {
    label: "list",
    style:  "unordered-list-item",
    icon: <FontAwesomeIcon icon={faList} />
  }
];

export { inlineStyles };