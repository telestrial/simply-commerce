import { ShoppingCartItem } from '../_types/shoppingCartItem';

interface CheckoutTableProps {
  shoppingCartItems: ShoppingCartItem[];
}

export default function CheckoutTable(props: CheckoutTableProps) {
  const { shoppingCartItems } = props;

  return (
    <div className='overflow-x-auto'>
      <table className='table text-center'>
        {/* head */}
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Each</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCartItems.map((shoppingCartItem) => {
            const { id, numberOfItems, name, price } = shoppingCartItem;
            return (
              <tr key={id}>
                <td>{numberOfItems}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{parseFloat(price) * numberOfItems}</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <th>Subtotal</th>
            <td>
              {shoppingCartItems.reduce((prev, curr) => {
                return prev + parseFloat(curr.price) * curr.numberOfItems;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
