class PorderSerializer < ActiveModel::Serializer
  attributes :id, :order_num, :total_paid, :description, :company_name, :product_id, :product

  def product
    {id: self.object.product.id, 
      name: self.object.product.name,
      sku: self.object.product.sku,
      color: self.object.product.color,
      price: self.object.product.price
    }
  end
end