class CreateEquipment < ActiveRecord::Migration[8.0]
  def change
    create_table :equipment do |t|
      t.integer :kind, null: false
      t.string :brand
      t.string :model
      t.string :serial_number, null: false
      t.date :acquisition_date
      t.string :status

      t.timestamps
    end
    add_index :equipment, :serial_number, unique: true
  end
end
