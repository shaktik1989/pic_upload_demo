class CreateClaims < ActiveRecord::Migration[5.1]
  def change
    create_table :claims do |t|
      t.string :name

      t.timestamps
    end
  end
end
