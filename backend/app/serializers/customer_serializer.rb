class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email, :user_id
  def user
    {user_id: self.object.user.id}
  end
end
