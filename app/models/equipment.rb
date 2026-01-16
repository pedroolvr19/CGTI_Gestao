class Equipment < ApplicationRecord
  enum :kind, { notebook: 0, printer: 1 }

  validates :kind, presence: true
  validates :serial_number, presence: true, uniqueness: true
end
