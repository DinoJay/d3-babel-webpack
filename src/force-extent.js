const forceExtent = function(extent, getBBox) {
  let nodes;

  function force(alpha) {
    let i;
    const n = nodes.length;
    let node;


    for (i = 0; i < n; ++i) {
      node = nodes[i];

      const bbox = getBBox(node);
      const x = node.x;
      const y = node.y;

      const distLeft = x - bbox[0][0] - extent[0][0];
      if (distLeft < 0) {
        node.x = extent[0][0] + bbox[0][0];
      }

      const distBottom = y - bbox[0][1] - extent[0][0];
      if (distBottom < 0) {
        node.y = extent[0][1] + bbox[0][1];
      }

      const distRight = x + bbox[1][0] - extent[1][0];
      if (distRight > 0) {
        node.x = extent[1][0] - bbox[1][0];
      }
      const distTop = y + bbox[1][1] - extent[1][1];
      if (distTop > 0) {
        // node.vy += (extent[1][1] - (y + dist)) * (alpha * pow);
        node.y = extent[1][1] - bbox[1][1];
      }
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.extent = function(_) {
    return arguments.length ? ((extent = _), force) : extent;
  };
  force.bbox = function(_) {
    return arguments.length ? ((getBBox = _), force) : extent;
  };

  return force;
};

export default forceExtent;
