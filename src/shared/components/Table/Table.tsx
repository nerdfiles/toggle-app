/**
 * @fileoverview ./src/shared/components/Table/Table.tsx
 * @description
 * Custom table component.
 */
import React, { useState } from 'react'


interface FormSubmit {
  (name: string, config: object): void 
}

interface Form {
  id: string,
  method: string,
  name: string,
  captionContent: string,
  actionUrl: string,
  validateForm: FormSubmit
}


const Table: React.FC<Form> = (props: Form) => {

  return (
    <form method={props.method}
          id={props.id}
          name={props.name}
          action={props.actionUrl}> 
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tfoot>
          <caption>{props.captionContent}</caption>
        </tfoot>
        <tbody>
          <tr onClick={e => console.log(props)}>
            <td></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}


export default Table

// EOF
