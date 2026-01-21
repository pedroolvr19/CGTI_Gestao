class AddIndexesToEquipment < ActiveRecord::Migration[8.0]
  def change
    add_index :equipment, :brand
    add_index :equipment, :model
    add_index :equipment, :responsible
    # serial_number already has a unique index
  end
end
