# Bootstrap sample layout for List Group

1. Sample HTML replica of a list group using Bootstrap:

```HTML
<div class="list-group w-auto">
    <label class="list-group-item d-flex gap-3">
      <input
        class="form-check-input flex-shrink-0"
        type="checkbox"
        value=""
        checked
        style="font-size: 1.375em"
      />
      <span class="pt-1 form-checked-content">
        <strong>Finish sales report</strong>
        <small class="d-block text-muted">
          <svg class="bi me-1" width="1em" height="1em">
            <use xlink:href="#calendar-event" />
          </svg>
          1:00–2:00pm
        </small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-3">
      <input
        class="form-check-input flex-shrink-0"
        type="checkbox"
        value=""
        style="font-size: 1.375em"
      />
      <span class="pt-1 form-checked-content">
        <strong>Weekly All Hands</strong>
        <small class="d-block text-muted">
          <svg class="bi me-1" width="1em" height="1em">
            <use xlink:href="#calendar-event" />
          </svg>
          2:00–2:30pm
        </small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-3">
      <input
        class="form-check-input flex-shrink-0"
        type="checkbox"
        value=""
        style="font-size: 1.375em"
      />
      <span class="pt-1 form-checked-content">
        <strong>Out of office</strong>
        <small class="d-block text-muted">
          <svg class="bi me-1" width="1em" height="1em">
            <use xlink:href="#alarm" />
          </svg>
          Tomorrow
        </small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-3 bg-light">
      <input
        class="form-check-input form-check-input-placeholder bg-light flex-shrink-0 pe-none"
        disabled
        type="checkbox"
        value=""
        style="font-size: 1.375em"
      />
      <span class="pt-1 form-checked-content">
        <span contenteditable="true" class="w-100">Add new task...</span>
        <small class="d-block text-muted">
          <svg class="bi me-1" width="1em" height="1em">
            <use xlink:href="#list-check" />
          </svg>
          Choose list...
        </small>
      </span>
    </label>
  </div>


```

# my custom TO-DO List style

1. for the input group design, use the input group of the Bootstrap. link below for documentation:

   - https://getbootstrap.com/docs/5.2/forms/input-group/

2. remember the grid layout of Bootstrap, it is important! read the link below for documentation:

   - https://getbootstrap.com/docs/5.2/layout/grid/
