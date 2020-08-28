import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  height :56px;
  list-style: none;
  margin: 0; 
  background: deepskyblue;
}

.navigation h1 {
  text-decoration: none;
  font-size : 20px;
  display: block;
  padding: 1em;
  color: white;
  margin-right: 25em;
}

.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}

.navigation a:hover {
  background: #1565C0;
}
`;

export const NavigationBar = () => (
  <Styles>
    <ul class="navigation">
    <h1>HOSTEL MANAGEMENT</h1>
  <li><a href="#">SignOut</a></li>
</ul>
  </Styles>
)