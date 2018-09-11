class AddColumnToClaims < ActiveRecord::Migration[5.1]
  def change
    add_column :claims, :description, :text
  end
end
