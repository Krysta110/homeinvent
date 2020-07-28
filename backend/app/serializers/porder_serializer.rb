class PorderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_num, :total_paid, :description, :company_name

  def product
    {id: self.object.product.id, 
      name: self.object.product.name,
      sku: self.object.product.sku,
      color: self.object.product.color,
      price: self.object.product.price
    }
  end
end