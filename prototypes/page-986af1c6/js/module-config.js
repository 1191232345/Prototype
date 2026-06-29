window.MODULE_SPEC = {
  "moduleName": "产品备案",
  "pageId": "page-986af1c6",
  "breadcrumb": "产品备案",
  "pageType": "list-crud",
  "version": "1.0.0",
  "dataFile": "data/page-986af1c6-data.json",
  "filters": [
    {
      "id": "filterSKU0",
      "label": "SKU",
      "type": "text",
      "field": "sKU",
      "match": "contains",
      "placeholder": "请输入SKU"
    },
    {
      "id": "filter1",
      "label": "客户代码",
      "type": "select",
      "field": "field2",
      "match": "exact",
      "options": [
        {
          "value": "",
          "label": "全部"
        },
        {
          "value": "demo",
          "label": "DEMO"
        },
        {
          "value": "vip",
          "label": "VIP"
        }
      ],
      "defaultValue": ""
    },
    {
      "id": "filter2",
      "label": "产品名称",
      "type": "text",
      "field": "field3",
      "match": "contains",
      "placeholder": "中文名/英文名"
    },
    {
      "id": "filter3",
      "label": "自定义编码",
      "type": "text",
      "field": "field3",
      "match": "contains",
      "placeholder": "请输入编码"
    }
  ],
  "columns": [
    {
      "field": "sKU",
      "label": "SKU"
    },
    {
      "field": "field2",
      "label": "客户代码"
    },
    {
      "field": "field3",
      "label": "自定义编码"
    },
    {
      "field": "field4",
      "label": "产品类型"
    },
    {
      "field": "field5",
      "label": "中文名"
    },
    {
      "field": "field6",
      "label": "英文名"
    },
    {
      "field": "field7",
      "label": "申报价值"
    },
    {
      "field": "cm",
      "label": "尺寸(cm)"
    },
    {
      "field": "g",
      "label": "重量(g)"
    },
    {
      "field": "field10",
      "label": "不规则标记"
    },
    {
      "field": "status",
      "label": "状态",
      "type": "status"
    }
  ],
  "rowActions": [
    "view"
  ],
  "toolbarButtons": [
    {
      "id": "toolbarBtn0",
      "label": "新增",
      "icon": "fa-plus",
      "action": "create",
      "variant": "primary",
      "logic": "打开新增表单弹窗，提交后刷新列表"
    },
    {
      "id": "toolbarBtn1",
      "label": "批量导入",
      "icon": "fa-upload",
      "action": "import",
      "variant": "secondary",
      "logic": "对选中行执行「批量导入」"
    },
    {
      "id": "toolbarBtn2",
      "label": "批量编辑尺寸",
      "icon": "fa-layer-group",
      "action": "custom",
      "variant": "secondary",
      "logic": "对选中行执行「批量编辑尺寸」"
    }
  ],
  "statusLabels": {
    "active": {
      "label": "启用",
      "class": "badge-success"
    },
    "inactive": {
      "label": "禁用",
      "class": "badge-secondary"
    }
  },
  "mockData": [
    {
      "id": "row_001",
      "sKU": "示例SKU",
      "field2": "示例客户代码",
      "field3": "示例自定义编码",
      "field4": "示例产品类型",
      "field5": "示例中文名",
      "field6": "示例英文名",
      "field7": "示例申报价值",
      "cm": "示例尺寸(cm)",
      "g": "示例重量(g)",
      "field10": "示例不规则标记",
      "status": "active"
    }
  ],
  "logicDocs": {
    "buttons": [
      [
        "新增",
        "工具栏",
        "无",
        "打开新增表单弹窗，提交后刷新列表"
      ],
      [
        "批量导入",
        "工具栏",
        "需先勾选列表行",
        "对选中行执行「批量导入」"
      ],
      [
        "批量编辑尺寸",
        "工具栏",
        "需先勾选列表行",
        "对选中行执行「批量编辑尺寸」"
      ],
      [
        "查看",
        "行操作",
        "无",
        "打开详情弹窗查看记录"
      ]
    ]
  },
  "formFields": [
    {
      "id": "fieldSku",
      "label": "SKU",
      "field": "sKU",
      "required": true,
      "type": "text",
      "placeholder": "请输入SKU"
    },
    {
      "id": "fieldField2",
      "label": "客户代码",
      "field": "field2",
      "required": true,
      "type": "text",
      "placeholder": "请输入客户代码"
    },
    {
      "id": "fieldField3",
      "label": "自定义编码",
      "field": "field3",
      "required": true,
      "type": "text",
      "placeholder": "请输入自定义编码"
    },
    {
      "id": "fieldField4",
      "label": "产品类型",
      "field": "field4",
      "required": true,
      "type": "text",
      "placeholder": "请输入产品类型"
    },
    {
      "id": "fieldField5",
      "label": "中文名",
      "field": "field5",
      "required": true,
      "type": "text",
      "placeholder": "请输入中文名"
    },
    {
      "id": "fieldField6",
      "label": "英文名",
      "field": "field6",
      "required": true,
      "type": "text",
      "placeholder": "请输入英文名"
    },
    {
      "id": "fieldField7",
      "label": "申报价值",
      "field": "field7",
      "required": true,
      "type": "text",
      "placeholder": "请输入申报价值"
    },
    {
      "id": "fieldCm",
      "label": "尺寸(cm)",
      "field": "cm",
      "required": true,
      "type": "text",
      "placeholder": "请输入尺寸(cm)"
    },
    {
      "id": "fieldG",
      "label": "重量(g)",
      "field": "g",
      "required": true,
      "type": "text",
      "placeholder": "请输入重量(g)"
    },
    {
      "id": "fieldField10",
      "label": "不规则标记",
      "field": "field10",
      "required": true,
      "type": "text",
      "placeholder": "请输入不规则标记"
    },
    {
      "id": "fieldStatus",
      "label": "状态",
      "field": "status",
      "required": true,
      "type": "select",
      "options": [
        {
          "value": "active",
          "label": "启用"
        },
        {
          "value": "inactive",
          "label": "禁用"
        }
      ]
    }
  ],
  "logicDocsHtml": "<div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-play-circle text-primary mr-2\"></i>初始化页面（数据展示逻辑）\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">逻辑项</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">说明</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">数据来源</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">展示规则</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">列表数据</td><td class=\"px-3 py-2 text-gray-600\">从 产品备案 原型自动提取</td><td class=\"px-3 py-2 text-gray-600\">mock 数据</td><td class=\"px-3 py-2 text-gray-600\">默认排序</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-search text-primary mr-2\"></i>检索条件\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">检索项</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">输入方式</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">逻辑说明</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">SKU</td><td class=\"px-3 py-2 text-gray-600\">文本输入</td><td class=\"px-3 py-2 text-gray-600\">请输入SKU</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">客户代码</td><td class=\"px-3 py-2 text-gray-600\">下拉单选</td><td class=\"px-3 py-2 text-gray-600\">全部/DEMO/VIP</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">产品名称</td><td class=\"px-3 py-2 text-gray-600\">文本输入</td><td class=\"px-3 py-2 text-gray-600\">中文名/英文名</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">自定义编码</td><td class=\"px-3 py-2 text-gray-600\">文本输入</td><td class=\"px-3 py-2 text-gray-600\">请输入编码</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-mouse-pointer text-primary mr-2\"></i>模块按钮逻辑\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">按钮</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">位置</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">前置条件</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">后续操作</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">新增</td><td class=\"px-3 py-2 text-gray-600\">工具栏</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">打开新增表单弹窗，提交后刷新列表</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">批量导入</td><td class=\"px-3 py-2 text-gray-600\">工具栏</td><td class=\"px-3 py-2 text-gray-600\">需先勾选列表行</td><td class=\"px-3 py-2 text-gray-600\">对选中行执行「批量导入」</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">批量编辑尺寸</td><td class=\"px-3 py-2 text-gray-600\">工具栏</td><td class=\"px-3 py-2 text-gray-600\">需先勾选列表行</td><td class=\"px-3 py-2 text-gray-600\">对选中行执行「批量编辑尺寸」</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">查看</td><td class=\"px-3 py-2 text-gray-600\">行操作</td><td class=\"px-3 py-2 text-gray-600\">无</td><td class=\"px-3 py-2 text-gray-600\">打开详情弹窗查看记录</td></tr></tbody></table></div></div>\n</div><div class=\"mb-4 border border-gray-200 rounded-lg overflow-hidden\">\n  <div class=\"px-4 py-3 bg-gray-50 border-b border-gray-200\">\n    <h4 class=\"font-semibold text-gray-800 flex items-center\">\n      <i class=\"fas fa-list-alt text-primary mr-2\"></i>属性取值逻辑\n    </h4>\n  </div>\n  <div class=\"p-4\"><div class=\"overflow-x-auto\"><table class=\"min-w-full text-sm border border-gray-200 rounded\"><thead class=\"bg-gray-50\"><tr><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">字段</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">名称</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">类型</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">必填</th><th class=\"px-3 py-2 text-left font-medium text-gray-700 border-b\">取值说明</th></tr></thead><tbody><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">SKU</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">客户代码</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">自定义编码</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">产品类型</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">中文名</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">英文名</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">申报价值</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">尺寸(cm)</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">重量(g)</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">不规则标记</td><td class=\"px-3 py-2 text-gray-600\">文本</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">—</td></tr><tr class=\"hover:bg-gray-50\"><td class=\"px-3 py-2 text-gray-600\">状态</td><td class=\"px-3 py-2 text-gray-600\">状态标签</td><td class=\"px-3 py-2 text-gray-600\">否</td><td class=\"px-3 py-2 text-gray-600\">已发布/未发布</td></tr></tbody></table></div></div>\n</div>"
};
