class AddResponsibleToEquipment < ActiveRecord::Migration[8.0]
  def change
    add_column :equipment, :responsible, :string
  end
end
