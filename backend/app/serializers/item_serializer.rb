class ItemSerializer < ActiveModel::Serializer
  attributes  :product, :onhand_qty, :comingin_qty, :sale_price
  # attributes :id, :name, :owner 
  def product
    {id: self.object.product.id, 
     name: self.object.product.name,
     sku: self.object.product.sku,
     color: self.object.product.color,
     price: self.object.product.price}

  end 
end
