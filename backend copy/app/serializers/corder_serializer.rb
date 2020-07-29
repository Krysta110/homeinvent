class CorderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_paid, :paid_with, :product_id , :customer, :product
  # :product, :customer
  def product
    {id: self.object.product.id, 
     name: self.object.product.name,
     sku: self.object.product.sku,
     color: self.object.product.color,
     price: self.object.product.price,
    #  onhand_qty: self.object.onhand_qty
    }
    end

    def customer
      {id: self.object.customer.id, 
       name: self.object.customer.name
      }
      end
  
end
