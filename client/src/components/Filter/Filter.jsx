import React from "react";

import { Button, ButtonGroup } from "react-bootstrap";

export default function Filter(props) {
  return (
    <ButtonGroup horizontal="true">
      <Button variant="outline-info">
        Ordenar por precio{" "}
        <select value={props.sort} onChange={props.sortProducts}>
          <option value="default">Default</option>
          <option value="lowest">Menor</option>
          <option value="highest">Mayor</option>
        </select>
      </Button>
      <Button variant="outline-info">
        Condicion{" "}
        <select value={props.size} onChange={props.filterProducts}>
          <option value="all">General</option>
          <option value="new">Nuevo</option>
          <option value="used">Usado</option>
        </select>
      </Button>
    </ButtonGroup>
  );
}
