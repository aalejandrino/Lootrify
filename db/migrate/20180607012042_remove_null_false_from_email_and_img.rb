class RemoveNullFalseFromEmailAndImg < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :phone, :string, :null => true
    change_column :users, :img_url, :string, :null => true

  end
end
