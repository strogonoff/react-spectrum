import './App.css';
import {Provider, defaultTheme, Item, TagGroup, Cell, Column, Row, TableBody, TableHeader, TableView, Content, Heading, Form, ComboBox, Button} from '@adobe/react-spectrum';
import Lighting from './Lighting';
import {useState} from 'react'
import BodyContent from './BodyContent';
import {enableTableNestedRows} from '@react-stately/flags';
import ButtonExamples from './ButtonExamples';
import CollectionExamples from './CollectionExamples';
import DateTimeExamples from './DateTimeExamples';
import FormExamples from './FormExamples';
import NavigationExamples from './NavigationExamples';
import OverlayExamples from './OverlayExamples';

let columns = [
  {name: 'Foo', key: 'foo'},
  {name: 'Bar', key: 'bar'},
  {name: 'Baz', key: 'baz'}
];

let nestedItems = [
  {foo: 'Lvl 1 Foo 1', bar: 'Lvl 1 Bar 1', baz: 'Lvl 1 Baz 1', childRows: [
    {foo: 'Lvl 2 Foo 1', bar: 'Lvl 2 Bar 1', baz: 'Lvl 2 Baz 1', childRows: [
      {foo: 'Lvl 3 Foo 1', bar: 'Lvl 3 Bar 1', baz: 'Lvl 3 Baz 1'}
    ]},
    {foo: 'Lvl 2 Foo 2', bar: 'Lvl 2 Bar 2', baz: 'Lvl 2 Baz 2'}
  ]}
];

function App() {
  let [selected, setSelection] = useState(false);
  enableTableNestedRows();

  return (
    <Provider theme={defaultTheme}
              colorScheme={selected ? "light" : "dark"}>
      <div className="content-padding">
        <Lighting selected={selected} switch={setSelection}/>
        <TagGroup aria-label="Static TagGroup items example">
          <Item>News</Item>
          <Item>Travel</Item>
          <Item>Gaming</Item>
          <Item>Shopping</Item>
        </TagGroup>
        <BodyContent />
        <TableView aria-label="example table with nested rows" UNSTABLE_allowsExpandableRows width={500} height={200} >
          <TableHeader columns={columns}>
            {column => <Column>{column.name}</Column>}
          </TableHeader>
          <TableBody items={nestedItems}>
            {(item: any) =>
              (<Row key={item.foo} UNSTABLE_childItems={item.childRows}>
                {(key) => {
                  return <Cell>{item[key]}</Cell>;
                }}
              </Row>)
            }
          </TableBody>
        </TableView>
        <ButtonExamples />
        <CollectionExamples />
        <DateTimeExamples />
        <FormExamples />
        <NavigationExamples />
        <OverlayExamples />
      </div>
    </Provider>
  );
}

export default App;
