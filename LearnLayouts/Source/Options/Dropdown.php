<?php

namespace MagentoConcepts\LearnLayouts\Source\Options;

class Dropdown implements \Magento\Framework\Data\OptionSourceInterface
{

    public function toOptionArray()
    {
        return [
            ['label' => __('Option 1'), 'value' => __('Value 1')],
            ['label' => __('Option 2'), 'value' => __('Value 2')]
        ];
    }
}
