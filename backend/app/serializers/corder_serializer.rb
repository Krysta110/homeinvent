class CorderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_paid, :paid_with, :order_num, :item_id, :item

  def item
    {id: self.object.item.id, 
      name: self.object.item.product.name,
      sku: self.object.item.product.sku,
      color: self.object.item.product.color,
      price: self.object.item.product.price
    }
  end
end
