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
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCartItems.map((shoppingCartItem) => (
            <tr key={shoppingCartItem.id}>
              <td>{shoppingCartItem.numberOfItems}</td>
              <td>{shoppingCartItem.name}</td>
              <td>
                {parseFloat(shoppingCartItem.price) *
                  shoppingCartItem.numberOfItems}
              </td>
            </tr>
          ))}
          <tr>
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
